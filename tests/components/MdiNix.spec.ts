
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNix from "../../src/components/MdiNix.vue";

test("MdiNix snapshot", () => {
  const wrapper = mount(MdiNix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
