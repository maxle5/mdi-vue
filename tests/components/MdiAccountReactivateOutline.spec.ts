
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountReactivateOutline from "../../src/components/MdiAccountReactivateOutline.vue";

test("MdiAccountReactivateOutline snapshot", () => {
  const wrapper = mount(MdiAccountReactivateOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
