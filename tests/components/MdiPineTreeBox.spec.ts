
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPineTreeBox from "../../src/components/MdiPineTreeBox.vue";

test("MdiPineTreeBox snapshot", () => {
  const wrapper = mount(MdiPineTreeBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
