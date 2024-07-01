
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewind45 from "../../src/components/MdiRewind45.vue";

test("MdiRewind45 snapshot", () => {
  const wrapper = mount(MdiRewind45, {});
  expect(wrapper.html()).toMatchSnapshot();
});
