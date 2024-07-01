
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCheck from "../../src/components/MdiAccountCheck.vue";

test("MdiAccountCheck snapshot", () => {
  const wrapper = mount(MdiAccountCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
