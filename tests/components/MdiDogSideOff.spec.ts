
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDogSideOff from "../../src/components/MdiDogSideOff.vue";

test("MdiDogSideOff snapshot", () => {
  const wrapper = mount(MdiDogSideOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
