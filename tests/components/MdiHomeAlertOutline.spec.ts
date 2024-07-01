
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAlertOutline from "../../src/components/MdiHomeAlertOutline.vue";

test("MdiHomeAlertOutline snapshot", () => {
  const wrapper = mount(MdiHomeAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
