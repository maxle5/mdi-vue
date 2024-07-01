
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCancelOutline from "../../src/components/MdiAccountCancelOutline.vue";

test("MdiAccountCancelOutline snapshot", () => {
  const wrapper = mount(MdiAccountCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
