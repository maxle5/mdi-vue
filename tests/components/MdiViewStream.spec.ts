
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewStream from "../../src/components/MdiViewStream.vue";

test("MdiViewStream snapshot", () => {
  const wrapper = mount(MdiViewStream, {});
  expect(wrapper.html()).toMatchSnapshot();
});
