
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectPlace from "../../src/components/MdiSelectPlace.vue";

test("MdiSelectPlace snapshot", () => {
  const wrapper = mount(MdiSelectPlace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
