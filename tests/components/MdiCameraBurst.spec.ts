
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraBurst from "../../src/components/MdiCameraBurst.vue";

test("MdiCameraBurst snapshot", () => {
  const wrapper = mount(MdiCameraBurst, {});
  expect(wrapper.html()).toMatchSnapshot();
});
