
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebook from "../../src/components/MdiNotebook.vue";

test("MdiNotebook snapshot", () => {
  const wrapper = mount(MdiNotebook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
