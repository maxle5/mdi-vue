
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliAlertOutline from "../../src/components/MdiChiliAlertOutline.vue";

test("MdiChiliAlertOutline snapshot", () => {
  const wrapper = mount(MdiChiliAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
