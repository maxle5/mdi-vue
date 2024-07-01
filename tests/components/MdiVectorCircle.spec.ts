
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorCircle from "../../src/components/MdiVectorCircle.vue";

test("MdiVectorCircle snapshot", () => {
  const wrapper = mount(MdiVectorCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
