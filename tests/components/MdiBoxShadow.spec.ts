
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoxShadow from "../../src/components/MdiBoxShadow.vue";

test("MdiBoxShadow snapshot", () => {
  const wrapper = mount(MdiBoxShadow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
