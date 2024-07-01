
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExponentBox from "../../src/components/MdiExponentBox.vue";

test("MdiExponentBox snapshot", () => {
  const wrapper = mount(MdiExponentBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
