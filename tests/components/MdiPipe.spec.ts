
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPipe from "../../src/components/MdiPipe.vue";

test("MdiPipe snapshot", () => {
  const wrapper = mount(MdiPipe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
