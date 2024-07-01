
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageAlertVariant from "../../src/components/MdiGarageAlertVariant.vue";

test("MdiGarageAlertVariant snapshot", () => {
  const wrapper = mount(MdiGarageAlertVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
