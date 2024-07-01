
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCheck from "../../src/components/MdiFileCheck.vue";

test("MdiFileCheck snapshot", () => {
  const wrapper = mount(MdiFileCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
