
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPocket from "../../src/components/MdiPocket.vue";

test("MdiPocket snapshot", () => {
  const wrapper = mount(MdiPocket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
