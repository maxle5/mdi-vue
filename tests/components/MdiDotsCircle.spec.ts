
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsCircle from "../../src/components/MdiDotsCircle.vue";

test("MdiDotsCircle snapshot", () => {
  const wrapper = mount(MdiDotsCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
