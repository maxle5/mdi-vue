
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitSkip from "../../src/components/MdiTransitSkip.vue";

test("MdiTransitSkip snapshot", () => {
  const wrapper = mount(MdiTransitSkip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
