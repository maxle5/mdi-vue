
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeskphone from "../../src/components/MdiDeskphone.vue";

test("MdiDeskphone snapshot", () => {
  const wrapper = mount(MdiDeskphone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
