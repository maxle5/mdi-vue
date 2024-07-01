
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloppyVariant from "../../src/components/MdiFloppyVariant.vue";

test("MdiFloppyVariant snapshot", () => {
  const wrapper = mount(MdiFloppyVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
