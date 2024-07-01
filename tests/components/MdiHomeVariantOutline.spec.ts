
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeVariantOutline from "../../src/components/MdiHomeVariantOutline.vue";

test("MdiHomeVariantOutline snapshot", () => {
  const wrapper = mount(MdiHomeVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
