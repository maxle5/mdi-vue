
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCigar from "../../src/components/MdiCigar.vue";

test("MdiCigar snapshot", () => {
  const wrapper = mount(MdiCigar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
