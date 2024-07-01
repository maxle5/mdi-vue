
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteForever from "../../src/components/MdiDeleteForever.vue";

test("MdiDeleteForever snapshot", () => {
  const wrapper = mount(MdiDeleteForever, {});
  expect(wrapper.html()).toMatchSnapshot();
});
