
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChip from "../../src/components/MdiChip.vue";

test("MdiChip snapshot", () => {
  const wrapper = mount(MdiChip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
