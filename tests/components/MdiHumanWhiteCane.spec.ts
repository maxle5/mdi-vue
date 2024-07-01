
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanWhiteCane from "../../src/components/MdiHumanWhiteCane.vue";

test("MdiHumanWhiteCane snapshot", () => {
  const wrapper = mount(MdiHumanWhiteCane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
