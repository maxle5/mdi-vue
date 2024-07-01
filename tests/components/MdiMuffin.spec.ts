
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMuffin from "../../src/components/MdiMuffin.vue";

test("MdiMuffin snapshot", () => {
  const wrapper = mount(MdiMuffin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
