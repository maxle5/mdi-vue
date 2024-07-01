
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandshakeOutline from "../../src/components/MdiHandshakeOutline.vue";

test("MdiHandshakeOutline snapshot", () => {
  const wrapper = mount(MdiHandshakeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
