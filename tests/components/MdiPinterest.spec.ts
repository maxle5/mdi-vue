
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinterest from "../../src/components/MdiPinterest.vue";

test("MdiPinterest snapshot", () => {
  const wrapper = mount(MdiPinterest, {});
  expect(wrapper.html()).toMatchSnapshot();
});
