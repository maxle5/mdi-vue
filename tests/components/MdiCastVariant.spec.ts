
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastVariant from "../../src/components/MdiCastVariant.vue";

test("MdiCastVariant snapshot", () => {
  const wrapper = mount(MdiCastVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
