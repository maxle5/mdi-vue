
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaw from "../../src/components/MdiPaw.vue";

test("MdiPaw snapshot", () => {
  const wrapper = mount(MdiPaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
