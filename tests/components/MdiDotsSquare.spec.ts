
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsSquare from "../../src/components/MdiDotsSquare.vue";

test("MdiDotsSquare snapshot", () => {
  const wrapper = mount(MdiDotsSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
