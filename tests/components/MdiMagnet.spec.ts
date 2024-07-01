
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnet from "../../src/components/MdiMagnet.vue";

test("MdiMagnet snapshot", () => {
  const wrapper = mount(MdiMagnet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
