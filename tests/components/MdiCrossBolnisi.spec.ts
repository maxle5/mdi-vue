
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrossBolnisi from "../../src/components/MdiCrossBolnisi.vue";

test("MdiCrossBolnisi snapshot", () => {
  const wrapper = mount(MdiCrossBolnisi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
