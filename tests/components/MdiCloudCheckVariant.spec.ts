
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCheckVariant from "../../src/components/MdiCloudCheckVariant.vue";

test("MdiCloudCheckVariant snapshot", () => {
  const wrapper = mount(MdiCloudCheckVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
