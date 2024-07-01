
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeSend from "../../src/components/MdiCubeSend.vue";

test("MdiCubeSend snapshot", () => {
  const wrapper = mount(MdiCubeSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});
