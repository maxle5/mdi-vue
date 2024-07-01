
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSackPercent from "../../src/components/MdiSackPercent.vue";

test("MdiSackPercent snapshot", () => {
  const wrapper = mount(MdiSackPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
