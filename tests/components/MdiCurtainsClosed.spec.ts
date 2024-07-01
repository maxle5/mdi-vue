
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurtainsClosed from "../../src/components/MdiCurtainsClosed.vue";

test("MdiCurtainsClosed snapshot", () => {
  const wrapper = mount(MdiCurtainsClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
