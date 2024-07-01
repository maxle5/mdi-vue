
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpiderWeb from "../../src/components/MdiSpiderWeb.vue";

test("MdiSpiderWeb snapshot", () => {
  const wrapper = mount(MdiSpiderWeb, {});
  expect(wrapper.html()).toMatchSnapshot();
});
