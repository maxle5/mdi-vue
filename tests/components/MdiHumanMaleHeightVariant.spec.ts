
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleHeightVariant from "../../src/components/MdiHumanMaleHeightVariant.vue";

test("MdiHumanMaleHeightVariant snapshot", () => {
  const wrapper = mount(MdiHumanMaleHeightVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
