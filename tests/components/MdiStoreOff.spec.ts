
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreOff from "../../src/components/MdiStoreOff.vue";

test("MdiStoreOff snapshot", () => {
  const wrapper = mount(MdiStoreOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
