
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanCheck from "../../src/components/MdiLanCheck.vue";

test("MdiLanCheck snapshot", () => {
  const wrapper = mount(MdiLanCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
