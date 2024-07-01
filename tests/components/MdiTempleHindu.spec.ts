
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTempleHindu from "../../src/components/MdiTempleHindu.vue";

test("MdiTempleHindu snapshot", () => {
  const wrapper = mount(MdiTempleHindu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
