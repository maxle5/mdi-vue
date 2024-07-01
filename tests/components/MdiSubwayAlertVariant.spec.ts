
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubwayAlertVariant from "../../src/components/MdiSubwayAlertVariant.vue";

test("MdiSubwayAlertVariant snapshot", () => {
  const wrapper = mount(MdiSubwayAlertVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
