
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleSafari from "../../src/components/MdiAppleSafari.vue";

test("MdiAppleSafari snapshot", () => {
  const wrapper = mount(MdiAppleSafari, {});
  expect(wrapper.html()).toMatchSnapshot();
});
