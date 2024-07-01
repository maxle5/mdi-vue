
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCowOff from "../../src/components/MdiCowOff.vue";

test("MdiCowOff snapshot", () => {
  const wrapper = mount(MdiCowOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
