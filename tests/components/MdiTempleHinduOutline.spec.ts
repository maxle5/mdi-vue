
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTempleHinduOutline from "../../src/components/MdiTempleHinduOutline.vue";

test("MdiTempleHinduOutline snapshot", () => {
  const wrapper = mount(MdiTempleHinduOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
