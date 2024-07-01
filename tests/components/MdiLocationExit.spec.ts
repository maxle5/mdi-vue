
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLocationExit from "../../src/components/MdiLocationExit.vue";

test("MdiLocationExit snapshot", () => {
  const wrapper = mount(MdiLocationExit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
