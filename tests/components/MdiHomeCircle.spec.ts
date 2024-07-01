
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeCircle from "../../src/components/MdiHomeCircle.vue";

test("MdiHomeCircle snapshot", () => {
  const wrapper = mount(MdiHomeCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
