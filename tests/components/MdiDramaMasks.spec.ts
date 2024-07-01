
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDramaMasks from "../../src/components/MdiDramaMasks.vue";

test("MdiDramaMasks snapshot", () => {
  const wrapper = mount(MdiDramaMasks, {});
  expect(wrapper.html()).toMatchSnapshot();
});
