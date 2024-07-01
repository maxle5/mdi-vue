
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareVariant from "../../src/components/MdiShareVariant.vue";

test("MdiShareVariant snapshot", () => {
  const wrapper = mount(MdiShareVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
